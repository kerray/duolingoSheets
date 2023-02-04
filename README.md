# Download Duolingo results daily

Run function from menu - config sheet gets created.

In config, add a name and JSON profile link as URL for each account you want to track.

JSON profile can be seen in F12 browser debugger, Network tab, when opening Duolingo public profile - looks like https://www.duolingo.com/2017-06-30/users?username=XXX

Then run this function as timer triggered (Extensions -> Apps Scripts -> Triggers -> Add time based trigger, run importDuolingoProfiles every day).

Using balena-google-apps-script-sheet-skeleton
Skeleton template for google apps script sheets projects.

## :package: Getting Started
0. Clone this repository & run `npm install`.
1. Install [Google clasp](https://github.com/google/clasp) and login,
  or `npx @google/clasp login` (will use the one installed in your node_modules).
2. Run `clasp create` so that a `.clasp.json` is created or create one with the desired projectID.
  Note: You shouldn't define a custom `rootDir`.
3. Update the project name and repo urls in `package.json`.
4. Write your code and `npm run build`.
5. Push with `npm run build && clasp push` or for convenience `npm run push`.


## Resources

See: https://github.com/google/clasp

See: https://github.com/google/clasp/blob/master/docs/typescript.md

See: https://developers.google.com/apps-script/guides/libraries
