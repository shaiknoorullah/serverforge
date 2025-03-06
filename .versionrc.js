module.exports = {
  types: [
    { type: 'feat', section: '✨ Features' },
    { type: 'fix', section: '🐛 Bug Fixes' },
    { type: 'docs', section: '📚 Documentation' },
    { type: 'style', section: '💎 Styles' },
    { type: 'refactor', section: '♻️ Code Refactoring' },
    { type: 'perf', section: '🚀 Performance Improvements' },
    { type: 'test', section: '🧪 Tests' },
  ],
  releaseCommitMessageFormat: 'chore(release): 🔖 {{currentTag}}',
  tagPrefix: 'v',
  commitUrlFormat: 'https://github.com/shaiknoorullah/serverforge/commit/{{hash}}',
  compareUrlFormat: 'https://github.com/yourusername/serverforge/compare/{{previousTag}}...{{currentTag}}'
};
