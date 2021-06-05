++++  Note for iTerm2 or Terminal or Bash

ls : enlisted all file in current directory
cd : navigate to certain directory
.. : go to previous directory

case example:
ls ..  : see listed file in the previous directory
ls ../..  : see listed file 2 level on previous dir

cd .. : go back 1 level on previous directory
cd ../.. : go back 2 level on previous directory

mkdir : create new directory
touch : create new file inside cwd
pwd : print working directory

nano <note name.txt> : create note txt
ctrl + x : close nano editor

rm <filename.extension> : delete file in cwd


++++ Note for Github

- add file to repo to specific existed repo
git remote add origin https://github.com/milkywoosh/jstrial-milkywoosh.git
git remote add origin <http of the repo>

- push file to github repo
git push -u  origin master  [master adalah nama branch utama di Github]

- check list remote 
git remote -v

- delete push
git remote rm origin

- after commit change the code in local git
git push : to push commit to Github repo

- fetch the changing after other person commit a change in our repo
first -> git fetch 
git pull origin master

- clone folder and data from github repo
git clone http address of repository

- push update to remote branch: for example -> "jstrial_mac" 
git push origin jstrial_mac


- go to specific branch
git checkout -b namebranch

- push to remote branch github
git push origin HEAD:branch2

- push to remote branch: jstrial_mac
git push origin jstrial_mac



