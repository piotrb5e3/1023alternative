import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('manage', function () {
    this.route('experiment', {path: '/experiment'}, function () {
      this.route('new', {path: '/new'});
      this.route('show', {path: '/:experiment_id'}, function() {});
    });
  });
  this.route('experiment', function() {
    this.route('pause');
    this.route('user-data');
  });
});

export default Router;
