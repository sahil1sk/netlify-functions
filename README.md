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

# We added netlify functions
=> netlify dev (To run the netlify functions)

# netlify.toml file is used while deployment to netlify

