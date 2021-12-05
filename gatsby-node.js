exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /@erkenningen\/ui/,
            use: loaders.null(),
          },
          {
            test: /.*npm-erkenningen-ui.*/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
