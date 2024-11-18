If you aren't totally sure what you mean by "uncommit" and don't know if you want to use `git reset`, please see [Revert to a previous Git commit](#).

If you're trying to understand `git reset` better, please see [Can you explain what "git reset" does in plain English?](#).

If you know you want to use `git reset`, it still depends what you mean by "uncommit". If all you want to do is undo the act of committing, leaving everything else intact, use:


### $ git reset --soft HEAD^

If you want to undo the act of committing and everything you'd staged, but leave the work tree (your files) intact:


### $ git reset HEAD^

And if you actually want to completely undo it, throwing away all uncommitted changes, resetting everything to the previous commit (as the original question asked):


### $ git reset --hard HEAD^

The original question also asked it's `HEAD^` not `HEAD`. `HEAD` refers to the current commit - generally, the tip of the currently checked-out branch. The `^` is a notation which can be attached to any commit specifier, and means "the commit before". So, `HEAD^` is the commit before the current one, just as `master^` is the commit before the tip of the master branch.

Here's the portion of the `git-rev-parse` documentation describing all of the ways to specify commits (`^` is just a basic one among many).