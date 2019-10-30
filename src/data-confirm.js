const clickDisableSelector = `
  a[data-disable-with], a[data-disable],
  button[data-disable-with], button[type=submit][data-disable]
`;
const submitDisableSelector = `
  button[type=submit][data-disable-with], button[type=submit][data-disable],
  input[type=submit][data-disable-with], input[type=submit][data-disable]
`;

$(clickDisableSelector).on('click', e => {
  const $button = $(e.delegateTarget);
  if (!($($button).is('[type=submit]') && $($button).parents('form'))) {
    disableButtons($button);
  }
})
$('form').on('submit', e => {
  const $form = $(e.delegateTarget);
  const $buttons = $form.find(submitDisableSelector);
  if ($buttons.length) {
    disableButtons($buttons);
  }
});