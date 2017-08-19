# Bash Script to quickly add a remote repository to github.

## The script uses curl and the Git API to add the repository

### The script and its two arguments:
- **script is:** `make-git-remote your-username your-new-repo`
	* Command is `make-git-remote`
	* The first argument, `your-username`, should be changed to your github username
	* The second argument, `your-new-repo`, should be changed to the new name of your repository

#### In order, the script:
1. Uses the `curl` command with the user `-u` switch and connects to Git API
	1. Uses `curl -d` switch to send a JSON POST request to Git API
	2. JSON object is simply `{"name":"your-repo-name"}`
2. Adds `remote origin` of `https://github.com/your-user-name/your-repo-name.git`
	- Make sure you don't already have a remote origin or destination; the command will fail
		1. Check using: `git remote -v`
		- If a remote origin or destination is listed, you should run:
			1. **If origin is present:** `git remote rm origin`
			2. **If destination is present:** `git remote rm destination`
			3. **Check that you've cleared remote and destination:** `git remote -v`
3. Runs `git push origin master` to your newly created repo
	-Make sure you have run the following on your local repository before pushing:
		1. `git init`
		2. `git add .`
		3. `git checkout origin master`

#### Todo:
- [x] Write initial script
- [ ] Write a prompt listing current remote, and asking if you want to remove it, maybe skipping if there is no current remote
- [ ] Write a prompt that asks if you want to push your local repo to remote
- [ ] Maybe add a few lines init-ing a repository if you're in the right directory, adding, and checking out before pushing 

##### Let me know if there anything is wrong and if you are :expressionless: .
##### I'm more than happy to take criticism, in fact I enjoy it :grin: . 
