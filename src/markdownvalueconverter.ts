import * as showdown from 'showdown';

export class MarkdownValueConverter {

    private converter = new showdown.Converter();

  toView(value) {
    return this.converter.makeHtml(value);
  }
}