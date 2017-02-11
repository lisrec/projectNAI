const router = require('express').Router(),
      storage = require('./../lib/storage.service'),
      _ = require('lodash');

router.get('/about', (req, res) => {
    res.json({
        name: 'Wypożyczalnia wideo "Pod 7 kotami"',
        hours: {
            monday: "9:00 - 19:00",
            thusday: "9:00 - 19:00",
            wednesday: "9:00 - 19:00",
            thursday: "9:00 - 19:00",
            friday: "9:00 - 19:00",
            saturday: "11:00 - 15:00",
            sunday: "Zamknięte"
        }
    });
});

router.get('/movies', (req, res) => {
    res.json(storage.getAllMovies());
});

router.get('/movies/:category', (req, res) => {
    res.json(storage.getMoviesFrom(req.params.category))
});

router.post('/borrow', (req, res) => {

    let responese = {
        err: false,
        msg: ""
    }

    if (!/\w+/.test(_.get(req, 'body.form.firstName', ''))) {
        responese.err = true;
        responese.msg = 'Niepoprawne imię.';
        res.json(responese);
        return;
    }
    if (!/\w+/.test(_.get(req, 'body.form.lastName', ''))) {
        responese.err = true;
        responese.msg = 'Niepoprawne nazwisko.';
        res.json(responese);
        return;
    }
    if (!/\d{9,10}/.test(_.get(req, 'body.form.phone'))) {
        responese.err = true;
        responese.msg = 'Niepoprawny numer telefonu.';
        res.json(responese);
        return;
    }
    if (storage.borrow(req.body.movieIds)){
        responese.err = false;
        responese.msg = '';
        res.json(responese);
    } else {
        responese.err = true;
        responese.msg = 'Brak filmów na stanie.';
        res.json(responese);
    }
});

module.exports = router;
