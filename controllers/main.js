exports.getIndex = (req, res, next) => {

      res.render('home', {
        pageName : 'Home'
      });
};
