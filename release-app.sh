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
read -p "[App] We'll \`npm publish\` with \"v$OVEROPS_INSTALL_PORTAL_VERSION\". Continue (yn)? " -n 1 -r
echo
[[ $REPLY =~ ^[Yy]$ ]] || exit -1

# Build and publish app

# No git-tag-version also disables the commit (See https://github.com/npm/npm/issues/7186)
npm version --no-git-tag-version $OVEROPS_INSTALL_PORTAL_VERSION
npm run clean
NODE_ENV=production npm run build

echo "[App] One time password: "
read line
[[ $line =~ [0-9]{6} ]] || exit -1
OTP=$line
npm publish --otp=$OTP


