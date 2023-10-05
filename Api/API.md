# Api documentation

In hte following text, you can see the documentation for all the available endpoints in this project.

### Endpoints

The URL are only examples, changes depending on the environment variables

#### CamperView

1. `http://127.16.16.15:5143/CamperView/NewReport`, This endpoint allows you to create a new report using the CamperView.

The format of the data send is:

```json
{
  "Title": "xd",
  "Site": "Apolo",
  "Description": "xddd",
  "DateOfIncident": "2023-09-29",
  "Category": "Digital",
  "Severity": "Mild",
  "Camper": { "Username": "AoKuang" }
}
```


#### TrainerView

##### GET

1. `http://127.16.16.15:5143/TrainerView/`, This endpoint allows to view all the incidents reported.

2. `http://127.16.16.15:5143/TrainerView/site/:Site`, This endpoint allows to filter the data recieved depending on the site that are reported.

3. `http://127.16.16.15:5143/TrainerView/camper/:Camper`, This endpoint allows to filter the data depending on the username of the camper that makes the report.

4. `http://127.16.16.15:5143/TrainerView/severity/:Severity` This endpoint allows to filter the data depending on the severity of the report.

5. `http://127.16.16.15:5143/TrainerView/category/:Category` This endpoint allows to filter the data depending on the category of the report.

#### PUT
1. `http://127.16.16.15:5143/TrainerView/:Tittle` This endpoint allows to modify/update the severity, category and add the support to fix it.

Example:
```json
{
  "Severity":"Mild",
  "Category":"Physical",
  "Support":{
    "Username":"sopas"
  }
}
```

#### SupportView

##### GET

1. `http://127.16.16.15:5143/SupportView/:Support`, This endpoint allows to get all the reports that the support logged has assigned.

##### PUT

1. `http://127.16.16.15:5143/SupportView/:Tittle`, This endpoint allows to edit/modify the assigned report, adding a diagnosis and a status.

Example:

```json
{
  "Support":{
      "Diagnosis":"lol"
  },
  "Status":"On progress"
}
```