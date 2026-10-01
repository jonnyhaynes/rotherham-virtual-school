# SelectableCard

Radio or checkbox options presented as large cards with an icon and description — for choices that need a sentence of explanation.

## Props
`legend`, `hint`, `error`, `type` (`'radio' | 'checkbox'`), `options` (`{value, title, description?, icon?, tone?, disabled?}[]`), `value`/`defaultValue`, `onChange`, `min` (card min width, 200px).

## Usage
3–6 options. They are real inputs inside a fieldset, so keyboard and screen-reader behaviour matches `ChoiceGroup`. Selected cards get a teal-700 border and tick — not colour alone.
