# MVP 


**App name**:
- Erudity

**Description**:
- Web-based application for cataloging learning resources such as YouTube videos, Udemy courses, etc 

**Main App flow**
  - Users submit a learning resource
    - Name
    - Link
    - Type
    - Date
    - Creator 
    - Platform
    - Description (optional)
  - Learning resources is added to queue for approval
    - Moderators review the resource and then add it into the catalog
    - Duplicate resources are rejected
  - Learning resources are publicly displayed
    - Sort options:
      - Date 
      - Name
      - Ratings
    - Filter options:
      - Platform
      - Subject
      - Creator
  - Members can interact with resources
    - Post comments
    - Rate resource
    - Report resource
      - Report is added to report queue for moderator review
      - Reports can be for updating some info in the resource (ex: Resource is no longer available)

**Functional Requirements**

|Id | Functional features |
|:---|:---|
| 1 | Signup & Signin |
| 2 | Resource Display |
| 3 | Resource interaction |
| 4 | Resource submission |
| 5 | Reporting resources |
| 6 | User password reset |
| 7 | Admin dashboard |
| 8 | User profile |