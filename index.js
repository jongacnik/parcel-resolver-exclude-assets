const { Resolver } = require("@parcel/plugin");
const load = require('load-pkg');

module.exports = new Resolver({
  async resolve({dependency, options, filePath}) {
    const pkg = await load();

    if (pkg && pkg.resolverExcludeAssets && Array.isArray(pkg.resolverExcludeAssets)) {
      let shouldExclude = pkg.resolverExcludeAssets.some(entryPath => {
        return filePath.startsWith(entryPath);
      });
      if (shouldExclude) {
        return { isExcluded: true };
      }
    } else {
      if (filePath.startsWith("/assets")) {
        return { isExcluded: true };
      }
    }

    return null; // let the other resolvers handle this
  }
});