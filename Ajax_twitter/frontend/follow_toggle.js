const APIUtil = require("./api_util");

class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data("user-id");
    this.followState = this.$el.data("initial-follow-state");

    this.render();
    this.handleClick = this.handleClick.bind(this);
    // <= binding this to handleclick, binds this instance of FollowToggle to this method, nstead of the global class
    this.$el.on("click", this.handleClick);
  }

  render() {
    if(this.followState === "followed") {
      this.$el.text("Unfollow!");
      this.$el.prop("disabled", false);
    } else if(this.followState === "unfollowed") {
      this.$el.text("Follow!");
      this.$el.prop("disabled", false);
    } else if (this.followState === "following") {
      this.$el.prop("disabled", true);
      this.$el.text("Following...");
    } else if (this.followState === "unfollowing") {
      this.$el.prop("disabled", true);
      this.$el.text("Unfollowing...");
    }
  }


  handleClick(e) {
    e.preventDefault();
    if(this.followState === "unfollowed"){
      this.followState = "following";
      this.render();
      APIUtil.followUser(this.userId)
      .then(() => {
        this.followState = "followed";
        this.render();
      });
    } else {
      this.followState = "unfollowing";
      this.render();
      APIUtil.unfollowUser(this.userId)
      .then(() => {
        this.followState = "unfollowed";
        this.render();
      });
    }
  }


}

module.exports = FollowToggle;
