const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
  };
    
  function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
  }
  
      
  function newSkill(req, res) {
    res.render('skills/new');
  }

function show(req, res) {
    res.render('skills/show')
}
function index(req, res, next) {

    const allSkills = Skill.getAll();

    res.render('skills/index', {skills: allSkills});
  }


function create(req, res) {

  Skill.create(req.body);

  res.redirect('/skills');
}

