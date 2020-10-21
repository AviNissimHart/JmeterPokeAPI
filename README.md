# JmeterPokeAPI - All JMeter Testing

In this repository, you can find my practice of non functional tests including spike, stress and load tests.
There is also my initial test on the PokeAPI

In MyProjectTest, i have tested the CRUD functionality of my previous project's API.

There are 3 seperate folders within that are named after the tests they contain.

Inside each of these are:
1. The jmx file for the specified tests
2. A folder named "outputto" which contains the html test reports generated from the CLI using this command (also runs the tests):
      Running a test: (used for load tests, etc) (append the location to store results to write to a csv file created by the append)
      jmeter -n -t your_script.jmx -l "location to store results" -e -o "output folder"
3. A folder named "locationtostoreresults" which will contain the previously mentioned csv file of the test report.

Something important to note is that my tests did contain some failures. I understand why this is the case.
Due to the vast number of threads running at the same time on my computer (not a big server) there is a slight overlap which gets
worse with each thread. This causes tests that are deleting a task to run as another test to update a task is run, and of course, the 
update then fails as the task to delete no longer exists.
I can see the aftermath by refreshing my website after the tests to see how 
there are discrepencies within tasks and task lists regarding their ids and contents.

I can deduce that this is the issue as i set up each test to create the lists, add items to the lists,
update and item, then delete the items and lists in order to begin again for the next test without having to spin
up my spring boot again. 

As my ids are generated as primary keys, they are subject to only go up and never repeat until the spring boot is terminated
and spun up again. Therefore, i used JSON extractors to get the id generated and use it later in my other tests to ensure 
I can run a test again and again without discrepencies over the respective ids.

Regarding structure for my tests, I have segregated the load, spike and stress to seperate files in order to compare them easily
and to prevent issues when running them. Furthermore, it is considered better practice.

Within each test, i have segregated my CRUD functions using logic (simple) controllers, firstly to improve readability, and 
secondly because it is considered good practice. It also helps to ensure everything is run in the sequence it should.
