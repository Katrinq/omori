SRS_PROMPT = """
Use this template of Software requirements specification: 
1 Introduction
1.1 Product scope 
1.2 Product value 
1.3 Intended audience
1.4 Intended use 
1.5 General description 
2 Functional requirements 
3 External interface requirements 
3.1 User interface requirements 
3.2 Hardware interface requirements 
3.3 Software interface requirements 
3.4 Communication interface requirements 
4 Non-functional requirements 
4.1 Security 
4.2 Capacity 
4.3 Compatibility 
4.4 Reliability 
4.5 Scalability 
4.6 Maintainability 
4.7 Usability 
4.8 Other non-functional requirements 
5 Definitions and acronyms 

Use provided template and create Functional requirements section using the following text as requirements: 
{REQUIREMENTS}

Use full SRS template provided and insert Functional Requirements created. Fill the rest of sections with appropriate requirements

"""

USER_STORIES_PROMPT = """
Create User Stories from Functional requirements. Add ACCEPTANCE CRITERIA
"""

USE_CASES_PROMPT = """
it's a template for use cases: 
Name 
Actor 
Stakeholders and Interests 
Preconditions 
Postconditions 
Main Success Scenario (Positive Scenario) 
Extensions (Negative Scenario) 
Special Requirements 
Technology & Data Variations List 
Frequency of Occurrence

using the template generate use case for User Story 1
"""
