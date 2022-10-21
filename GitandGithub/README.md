# Crash Course on Git and Github
This folder holds your task to solidify your knowledge on git and guthub.
On this task you would be able to learn some regular and popular git operations like;
- Cloning a repository
- Working or adding a file in that repository.
- Staging or adding the file to git, so it can be tracked.
- Committing a file, folder or projects.
- Pushing to github
- Doing a Pull Request.

# PreRequisite
Before you begin, make sure to follow me and also star this repository.
To be able to successfully to do this task make sure you have consumed the introductory contents, If you are yet to kindly use the information below.

- [What is git and github](https://blog.amaizumelody.com/SETTING%20UP%20GIT%20AND%20GITHUB%20-%20GIT%20FUNDAMENTALS)
- [Introduction to CommandLine Interface](https://blog.amaizumelody.com/DEEP%20INTRODUCTION%20TO%20THE%20COMMAND%20LINE%20-%20LINUX%20AND%20GIT%20BASH%20USAGE)
- [Git and Github Foundations](https://blog.amaizumelody.com/GIT%20BASICS%20AND%20COMMANDS%20-%20FOUNDATIONS%20COURSE)
- [Introduction to Text Editors](https://blog.amaizumelody.com/GIT%20FUNDAMENTALS%20-%20INTRODUCTION%20TO%20TEXT%20EDITORS)
- [Basic Git Operations](https://blog.amaizumelody.com/GIT%20AND%20GITHUB%20FUNDAMENTALS%20-%20BASIC%20GIT%20OPERATIONS)

After going through this content, you should be able to proceed to doing this task.

# TASK
Follow the step by step instruction to perform or do this task.

You can watch the video instructions or demo [here]() for more clarity on what to do.

## Step 1 - Clone the github repository
To begin to work on a particular repository that you have access to, you have to first clone that repository(It is assumed that you already know how to clone a repository). Be sure to know the exact location the repository is been cloned to in your system/laptop.
You can find the repository link [here](https://github.com/lettaz/Fullstack-Development-Bootcamp)

# Step 2 - Open cloned project or folder on your text editor.
After you have cloned, open the folder with your text editors(If you don't know what a text editor is kindly check the prerequisite section)

# Step 3 - Switch Branch and create a local branch on your system
When you clone a repository by default git set the working branch to main, You are expected to switch to the staging or development. WHY? This practice is not a must, but it is expected reason is because most projects have more than one branch and it is expected to know which branch is the working branch(the branch with the latest update) in the remote repository.
The branch with the most recent update is what you would use to create your own branch and be able to make changes.
For information on git branch see [here](https://www.youtube.com/watch?v=e2IbNHi4uCI&ab_channel=freeCodeCamp.org) 

For this task use `git switch Classes` to switch to the branch with the latest updates, which in our case is "Classes".

After thst do `git checkout -b melody` now "melody" is my local repository branch name. This branch(melody) would carry all our changes and would track the classes branch, to know if its up to date.

# Step 4 - Create a New File with your name and extension txt
Create a new file on the GitandGithub Directory, and name the file "yourfirstname.txt"(e.g melody.txt) where txt is the file extension.

# Step 5 - Input Content on your file
Now we have created a new file, the next step is to change the content of your file, its pretty simple.
On the GitandGithub Directory, you should see a file that says "melody.txt" open the file copy its content and paste on your file, now edit the content on your file to fit in to yours.

# Step 6 - Add and Commit Files
Now use the git add command and the git commit command to stage file and make them ready for push.

# Step 7 - Git Pull
Before you make a push, it is advisable to first pull.
This would help update your branch to the latest version of the remote repository, so there is no merge conflict when you do a pull request.
Don't know how to PULL(See the Prerequisite above)

# Step 7 - Git Push
After pulling, now you can git push your committed files.
You should note that pushing this file creates a new branch on your remote repository, hence you are expected to do a Pull request.
Don't know how to PULL(See the Prerequisite above)

# Step 8 - Pull request
A pull request is what you do telling the owners of the repository to accept the hanges you made to their repository.

On completion of this step, if there is no merge conflict you should be done with this task