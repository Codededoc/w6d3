const FollowToggle = require('./follow_toggle');

$(() => {
  let $followToggle = $('.follow-toggle');
  $followToggle.each ((index, button) => {
    new FollowToggle(button);
  });
});

const UsersSearch = require('./users_search');

$(() => {
  let $usersSearch = $('.users-search');
  $usersSearch.each ((index, input) => {
    new UsersSearch(input)
  })
});
