# Ajax Type Ahead 📝

Type ahead feature part of the [Javascript30]('https://javascript30.com/') challenge.

This was one tricky m**\*\*\*\***. As I'm not as used as I would like to using `RegExp`, I decided to do it my way. Went for a trustworthy loop that goes over the API data and filters it comparing it with the value the user has written in the text input, then everything is rendered.

The tricky part was actually the highlighted text in the rendered search, because without the regExp gets a little repetitive: used `map` function that searchs for the input value, then cuts it, and replaces it with the highlighted `<span>`.

Will work on doing as the tutorial states in a near future.
