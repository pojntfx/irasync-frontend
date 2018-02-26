# Irasync React Frontend

An Irasync frontend implemented using React, Semantic UI and Apollo Client.

## Usage

```bash
# Install dependencies
yarn install
# Serve app on http://localhost:3000
yarn start

# Serve mockups on http://localhost:3002
yarn mockups

# Update and serve docs (annotated source on http://localhost:3003, full docs on http://localhost:3004)
yarn docs
# Only update the docs
yarn docs:update
# Only serve the docs on (annotated source on http://localhost:3003, full docs on http://localhost:3004)
yarn docs:serve

# To do the same with only the annotated source, run
yarn docs:minimal<command> # with <command> as either :update to update, :serve to serve and nothing to do both
# To do the same with only the full docs, run
yarn docs:full<command> # with <command> as either :update to update, :serve to serve and nothing to do both
```

## Screenshots

> Below are the screenshots of the "static_mockups" branch as well as screenshots from before the move to React. These may be outdated.

### Angular evaluation with ng-bootstrap

![User menu popup](screenshots/angular/community_popup_user.png)

![Card menu popup desktop](screenshots/angular/community_popup_card.png)

![Signup](screenshots/angular/signup.png)

![Community desktop](screenshots/angular/community.png)

![Browse menu popup mobile](screenshots/angular/community_mobile_popup_browse.png)

![Card menu popup mobile](screenshots/angular/community_mobile_popup_card.png)

### Mockups created with Bootstrap

### A community in light mode

#### Initial view on desktop

![A screenshot of a community in light mode on desktop](screenshots/mockups/c_cyberpunk_light_lg_top.jpg)

#### Scrolled down view on desktop

![A screenshot of a community in light mode on desktop, scrolled down](screenshots/mockups/c_cyberpunk_light_lg_bottom.png)

#### Initial view on mobile

![A screenshot of a community in light mode on mobile](screenshots/mockups/c_cyberpunk_light_sm.png)

### A community in dark mode

#### Initial view on desktop (dark mode)

![A screenshot of a community in dark mode on desktop](screenshots/mockups/c_cyberpunk_dark_lg_top.jpg)

#### Scrolled down view on mobile

![A screenshot of a community in dark mode on mobile](screenshots/mockups/c_cyberpunk_dark_sm_bottom.png)

### The home page (Older, more minimal version)

![A screenshot of the home page in light mode on desktop](screenshots/mockups/home_light_lg.png)

## License

Irasync React Frontend Reference Implementation
Copyright (C) 2018 Felix Pojtinger

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <http://www.gnu.org/licenses/>.
