/**
 * LoremIpsum
 *
 * @class
 */
export class LoremIpsum {

  constructor() {
    /**
     * Possible words
     *
     * @type {Array}
     */
    this._words = [ 'a', 'ac', 'accumsan', 'ad', 'adipiscing', 'aenean', 'aenean', 'aliquam', 'aliquam', 'aliquet', 'amet', 'ante', 'aptent', 'arcu', 'at', 'auctor', 'augue', 'bibendum', 'blandit', 'class', 'commodo', 'condimentum', 'congue', 'consectetur', 'consequat', 'conubia', 'convallis', 'cras', 'cubilia', 'curabitur', 'curabitur', 'curae', 'cursus', 'dapibus', 'diam', 'dictum', 'dictumst', 'dolor', 'donec', 'donec', 'dui', 'duis', 'egestas', 'eget', 'eleifend', 'elementum', 'elit', 'enim', 'erat', 'eros', 'est', 'et', 'etiam', 'etiam', 'eu', 'euismod', 'facilisis', 'fames', 'faucibus', 'felis', 'fermentum', 'feugiat', 'fringilla', 'fusce', 'gravida', 'habitant', 'habitasse', 'hac', 'hendrerit', 'himenaeos', 'iaculis', 'id', 'imperdiet', 'in', 'inceptos', 'integer', 'interdum', 'ipsum', 'justo', 'lacinia', 'lacus', 'laoreet', 'lectus', 'leo', 'libero', 'ligula', 'litora', 'lobortis', 'lorem', 'luctus', 'maecenas', 'magna', 'malesuada', 'massa', 'mattis', 'mauris', 'metus', 'mi', 'molestie', 'mollis', 'morbi', 'nam', 'nec', 'neque', 'netus', 'nibh', 'nisi', 'nisl', 'non', 'nostra', 'nulla', 'nullam', 'nunc', 'odio', 'orci', 'ornare', 'pellentesque', 'per', 'pharetra', 'phasellus', 'placerat', 'platea', 'porta', 'porttitor', 'posuere', 'potenti', 'praesent', 'pretium', 'primis', 'proin', 'pulvinar', 'purus', 'quam', 'quis', 'quisque', 'quisque', 'rhoncus', 'risus', 'rutrum', 'sagittis', 'sapien', 'scelerisque', 'sed', 'sem', 'semper', 'senectus', 'sit', 'sociosqu', 'sodales', 'sollicitudin', 'suscipit', 'suspendisse', 'taciti', 'tellus', 'tempor', 'tempus', 'tincidunt', 'torquent', 'tortor', 'tristique', 'turpis', 'ullamcorper', 'ultrices', 'ultricies', 'urna', 'ut', 'ut', 'varius', 'vehicula', 'vel', 'velit', 'venenatis', 'vestibulum', 'vitae', 'vivamus', 'viverra', 'volutpat', 'vulputate' ];
  }

  /**
   * Get random number
   *
   * @param  {Number} x
   * @param  {Number} y
   * @return {Number}
   */
  _random(x, y) {
    const rnd = (Math.random() * 2 - 1) + (Math.random() * 2 - 1) + (Math.random() * 2 - 1);
    return Math.round(Math.abs(rnd) * x + y);
  }

  /**
   * Get random number between min and max
   *
   * @param  {Number} min (optional) lower result limit
   * @param  {Number} max (optional) upper result limit
   * @return {Number}     random number
   */
  _count(min, max) {
    let result;
    if (min && max) result = Math.floor(Math.random() * (max - min + 1) + min);
    else if (min) result = min;
    else if (max) result = max;
    else result = this._random(8, 2);

    return result;
  }

  /**
   * Get random words
   *
   * @param  {Number} min (optional) minimal words count
   * @param  {Number} max (optional) maximal words count
   * @return {Object}     array of random words
   */
  words(min, max) {
    const result = [];
    const count = this._count(min, max);

    // get random words
    while (result.length < count) {
      const pos = Math.floor(Math.random() * this._words.length);
      const rnd = this._words[pos];

      // do not allow same word twice in a row
      if (result.length && result[result.length - 1] === rnd) {
        continue;
      }

      result.push(rnd);
    }

    return result;
  }

  /**
   * Generate sentence
   *
   * @param  {Number} min (optional) minimal words count
   * @param  {Number} max (optional) maximal words count
   * @return {String}     sentence
   */
  sentence(min, max) {
    const words = this.words(min, max);

    // add comma(s) to sentence
    let index = this._random(6, 2);
    while (index < words.length - 2) {
      words[index] += ',';
      index += this._random(6, 2);
    }

    // append puctation on end
    const punct = '...!?'
    words[words.length - 1] += punct.charAt(Math.floor(Math.random() * punct.length));

    // uppercase first letter
    words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);

    return words.join(' ');
  }

  /**
   * Generate paragraph
   *
   * @param  {Number} min (optional) minimal words count
   * @param  {Number} max (optional) maximal words count
   * @return {String}     paragraph
   */
  paragraph(min, max) {
    if (!min && !max) {
      min = 20;
      max = 60;
    }

    const count = this._count(min, max);
    let result = '';

    // append sentences until limit is reached
    while (result.slice(0, -1).split(' ').length < count) {
      result += this.sentence() + ' ';
    }
    result = result.slice(0, -1)

    // remove words
    if (result.split(' ').length > count) {
      const punct = result.slice(-1);
      result = result.split(' ').slice(0, count).join(' ');
      result = result.replace(/,$/, '');
      result += punct;
    }

    return result;
  }

}
