# js-highlighter

💡 A library for highlighting HTML elements, which allows an infinite level of depth. 💡

## Installation

```bash
npm install js-highlighter
```

## Usage

```javascript
import { highlight } from "js-highlighter";

highlight({ id: "my-id", highlightClass: "my-highlight-class" });
```

## Options

| Option         | Type   | Description                                  |
| -------------- | ------ | -------------------------------------------- |
| id             | string | The id of the element to highlight.          |
| highlightClass | string | The class to add to the highlighted element. |

## Roadmap

- [x] Add highlight with infinite depth
- [ ] Add utils for getting elements
- [ ] Add tests
- [ ] Add documentation
- [ ] Add examples with CodeSandbox
- [ ] Add support for React
  - [ ] Handle focus, click, blur, key events

Open for suggestions !

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
