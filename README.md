# Install CLI'S if you haven't done before
=> npm install -g netlify-cli

# setup new  Angular Project
=> ng new netlify-security --routing --style=scss
=> cd netlify-security

# Generate component
=> ng g c landing

# Install the Airtable package
=> npm i --save airtable

# Netlify functions package
=> npm i --save @netlify/functions


# We added netlify functions and to run the netlify site locally run
# We also added netlify/functions/signup.ts file where our function we have added
=> netlify dev (To run the netlify with functions)

# netlify.toml file is used while deployment to netlify

# To setup sit using netlify
=> Initalize the git and push all our data to the git after commiting
=> netlifiy init (In root directory)
=> Create & configure new site
=> choose team (your netlify team)
=> site name (Press enter)
=> If your github repo is private then it will ask for access (choose app.netlify.com option give access to it through web popup)
=> your build command (ng build taken from netlify.toml file just press enter)
=> directory to deploy (taken from toml file just press enter)
=> functions folder (taken from toml file just press enter)
=> Then wait for deploy (Go to netlify and see your new folder it will be deployed by this netlify CICD)

# If you find build size error during build (increase the size in angular.json file to remove the error)
{
    "type": "initial",
    "maximumWarning": "4mb",
    "maximumError": "6mb"
}

# Here how we set api key in netlify
=> netlify env:set AIRTABLE_KEY <your_api_key>
=> if your live site not get api key need to deploy again to get env variable
=> go inside netlify => your site => deploys => trigger deploy (by clear cache and deploy site)

## Important After Deploy netlify site next time whenever you will push data to your Github it will automatically trigger another deploy for you
=> when you go commit and push => Go to netlify => you site => Deploys => (and see in Production Deploys another build triggered)


# Install tailwind with scss pattern
=> npm install -D tailwindcss postcss autoprefixer
=> npx tailwindcss init
