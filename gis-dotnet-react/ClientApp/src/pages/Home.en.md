# .NET-Core-7-React-GIS-Example

\
Welcome to the .NET Core 7 + React GIS Example

---

## Please read before continuing

\
As with anything public & made by me on this GITHUB -- please feel free to utilize as you wish as long as you follow the license agreements of any dependencies used.

I don't need any attribution directly. The only thing I ask is that you take steps and efforts to help budding software developers in the world whenever you can in the form of mentoring and tutoring.

Many of us are direct descendents of actions such as those and it is important that we take efforts to pass that on as we build a more unified world.

---

## Description

\
This software utilizes Spatialite extended SQLite as a data store, .NET Core 7 as an application layer, and React.js utilizing Typescript as a front-end. This software demos spatial data modeling using entity framework. It then hosts a range of web application routes utilized by a React application enabling CRUD operations against geographic data & artifacts serverside.

---

## Installation

> **_NOTE:_**  Maybe I'll make instructions per system/OS -- feel free to contact me and ask for help at LinkedIn.

1. Clone the repo `git clone https://github.com/coffeestained/.NET-Core-7-React-GIS-Example.git`
2. Change directory to the `.csproj` directory
3. Run `dotnet user-secrets init` to init a dot-net user-secrets store.
4. Set a mapbox user secret by using `dotnet user-secrets set "Mapbox:ServiceApiKey" "KEY"`

---

## Running

> **_NOTE:_**  Maybe I'll make instructions per system/OS -- feel free to contact me and ask for help at LinkedIn.

1. Start a development server by using `dotnet run`
2. Navigate to `https://localhost:7209/` Note: the first navigation triggers the dotnet application serving the React SPA. Be patient.

---

## Build & Deploy

> **_NOTE:_**  Maybe I'll make instructions per system/OS -- feel free to contact me and ask for help at LinkedIn.

Manual build & deploy steps coming soon.

---

## Testing

> **_NOTE:_**  Maybe I'll make instructions per system/OS -- feel free to contact me and ask for help at LinkedIn.

Unit and e2e testing steps coming soon.

---

## Automate

> **_NOTE:_**  Maybe I'll make instructions per system/OS -- feel free to contact me and ask for help at LinkedIn.

CICD configuration steps coming soon.

---

## Data Store

\
Spatialite extended SQLite for now.

I'll develop environment configurations to easily switch between SQLite and a true My/MSSQL backend eventually. /shrug

---

## Application Layer

\
.NET Core 7 + Entity Framework.

Unit testing via xUnit.

---

## Presentation Layer

\
React + Typescript + Mapbox + Deck.gl

7-1 SASS Model

Maybe more to come.

---

## Thank you

\
😶👍

---
