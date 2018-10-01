#! /bin/sh

# Exit on error
set -e

# Ask for new version number if not in env
if [[ $OVEROPS_INSTALL_PORTAL_VERSION == "" ]]; then
  current=`json -f package.json version`
  read -p "New version number (current is ${current}): " version
  export OVEROPS_INSTALL_PORTAL_VERSION=$version
fi

# Ask for confirmation
read -p "[Docs] We'll \`git tag\` and \`git push\` on \`pullb0x/install-portal\`. Continue (yn)? " -n 1 -r
echo
[[ $REPLY =~ ^[Yy]$ ]] || exit -1


# Tag and Push
# No git-tag-version also disables the commit (See https://github.com/npm/npm/issues/7186)
npm version --no-git-tag-version $OVEROPS_INSTALL_PORTAL_VERSION

# Commit and tag
git add package.json VERSION
git commit -m "chore(release): $OVEROPS_INSTALL_PORTAL_VERSION"
git tag -a "v$OVEROPS_INSTALL_PORTAL_VERSION" -m "$OVEROPS_INSTALL_PORTAL_VERSION"

# Generate the ChangeLog
npm run changelog
git add CHANGELOG.md
git commit --amend -m "chore(release): $OVEROPS_INSTALL_PORTAL_VERSION"
git tag -a "v$OVEROPS_INSTALL_PORTAL_VERSION" -m "$OVEROPS_INSTALL_PORTAL_VERSION" -f

# Push
git push
git push --tags
