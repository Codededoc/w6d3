const APIUtil = require("./api_util");

class UsersSearch {
  constructor(el) {
    this.$el = $(el);
    this.$input = this.$el.find('input[type=text]');
    this.$ul = $('.users');
    this.renderResults();
    this.handleInput = this.handleInput.bind(this);
    this.$el.on("submit", this.handleInput);
  }

  handleInput(e) {
    e.preventDefault();
    APIUtil.searchUsers(this.$input);
  }

  renderResults() {
    this.$ul.each((user) => {
      const $newLi = $('<li></li>');
      $newLi.text(`${user.username}`);
      this.$ul.append($newLi);
    });
  }
}

module.exports = UsersSearch;
