Package.describe({
  name: 'overture8:wordcloud2',
  summary: 'Create a tag cloud/Wordle presentation on 2D canvas or HTML.',
  version: '1.0.0',
  git: 'https://github.com/overture8/meteor-wordcloud2'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles(['wordcloud2.js', 'overture8:wordcloud2.js'], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('overture8:wordcloud2');
  api.addFiles('overture8:wordcloud2-tests.js');
});
