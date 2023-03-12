<br/>
<p align="center">
  <h3 align="center">To do list API using nodejs</h3>
   <p align="center">
    A complete REST API for your to-do app including login, register and crud operations written using nodejs
    <br/>
    <br/>
</p>



## Table Of Contents

* [About the Project](#about-the-project)
* [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Endpoints](#endpoints)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)


## About The Project

This project is based on Nodejs. This is a complete ready to go api for a to do list app. 

## Built With



* [nodejs](https://nodejs.org/)
* [body-parser](https://www.npmjs.com/package/body-parser)
* [cookie-parser](https://www.npmjs.com/package/cookie-parser)
* [cors](https://www.npmjs.com/package/cors)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [express](https://www.npmjs.com/package/express)
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
* [mongoose](https://www.npmjs.com/package/mongoose)

## Getting Started


### Prerequisites

Install node packege manager using

```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo
```sh
git clone https://github.com/githmin/todolist-api-nodejs.git
```

2. cd into the directory
```sh
cd todolist-api-nodejs
```

3.  run below command to install dependencies
```JS
npm install
```
4. set .env variables

    dbUrl = your mongodb url here
    
    port = your desired port here
    
    secret = jwt encoding secret here

## Endpoints


Register ==> (Post request) ==> api/v1/login/register

Login ==> (Post request) ==> /api/v1/login 

To add | delete | update | delete, make relevent requests to this path ==> /api/v1/

### JsonWebToken is used for authentication

## Roadmap

See the [open issues](https://github.com/githmin/todolist-api-nodejs/issues) for a list of proposed features (and known issues).

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.
* If you have suggestions for adding or removing projects, feel free to [open an issue](https://github.com/githmin/todolist-api-nodejs/issues/new) to discuss it, or directly create a pull request after you edit the *README.md* file with necessary changes.
* Please make sure you check your spelling and grammar.
* Create individual PR for each suggestion.

### Creating A Pull Request

1. Fork the Project
2. Create your Feature Branch
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. 