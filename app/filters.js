module.exports = function (env) {
  /**
   * Instantiate object used to store the methods registered as a
   * 'filter' (of the same name) within nunjucks. You can override
   * gov.uk core filters by creating filter methods of the same name.
   * @type {Object}
   */
  var filters = {}

  filters.fullName = function(person) {
    return person.first_name + ' ' + person.surname
  }

  filters.personName = function(person) {
    return person.surname + ', ' + person.first_name
  }

  filters.allocatedPrisoners = function(prisoners) {
    return prisoners.filter(prisoner => !!prisoner.allocated && !!prisoner.tier && !!prisoner.release_date);
  }

  filters.unallocatedPrisoners = function(prisoners) {
    return prisoners.filter(prisoner => !prisoner.allocated && !!prisoner.tier && !!prisoner.release_date);
  }

  filters.untieredPrisoners = function(prisoners) {
    return prisoners.filter(prisoner => !prisoner.tier && !!prisoner.release_date);
  }

  filters.unprocessedPrisoners = function(prisoners) {
    return prisoners.filter(prisoner => !prisoner.release_date);
  }

  filters.getPrisoner = function(prisoners, prisonerID) {
    return prisoners.find(function(prisoner) {
      return prisoner.id === prisonerID;
    });
  }

  filters.getPom = function(poms, pomID) {
    return poms.find(function(pom) {
      return pom.id === parseInt(pomID);
    });
  }


  /* ------------------------------------------------------------------
    add your methods to the filters obj below this comment block:
    @example:

    filters.sayHi = function(name) {
        return 'Hi ' + name + '!'
    }

    Which in your templates would be used as:

    {{ 'Paul' | sayHi }} => 'Hi Paul'

    Notice the first argument of your filters method is whatever
    gets 'piped' via '|' to the filter.

    Filters can take additional arguments, for example:

    filters.sayHi = function(name,tone) {
      return (tone == 'formal' ? 'Greetings' : 'Hi') + ' ' + name + '!'
    }

    Which would be used like this:

    {{ 'Joel' | sayHi('formal') }} => 'Greetings Joel!'
    {{ 'Gemma' | sayHi }} => 'Hi Gemma!'

    For more on filters and how to write them see the Nunjucks
    documentation.

  ------------------------------------------------------------------ */

  /* ------------------------------------------------------------------
    keep the following line to return your filters to the app
  ------------------------------------------------------------------ */
  return filters
}
