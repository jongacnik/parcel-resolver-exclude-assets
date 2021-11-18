const { Resolver } = require("@parcel/plugin");
const load = require('load-pkg');

module.exports = new Resolver({
  async resolve({dependency, options, specifier}) {
    const pkg = await load();

    if (pkg && pkg.resolverExcludeAssets && Array.isArray(pkg.resolverExcludeAssets)) {
      let shouldExclude = pkg.resolverExcludeAssets.some(entryPath => {
        return specifier.startsWith(entryPath);
      });
      if (shouldExclude) {
        return { isExcluded: true };
      }
    } else {
      if (specifier.startsWith("assets")) {
        return { isExcluded: true };
      }
    }

    return null; // let the other resolvers handle this
  }
});