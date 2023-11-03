## nextver.sh
#!/usr/bin/bash

# show next version
echo $(npx standard-version --dry-run | grep "release v" | awk '{ print $4 }' | sed 's/[\"v]//g' | tr -d '[[:space:]]')
