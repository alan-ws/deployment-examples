BRANCH="$(git rev-parse --abbrev-ref HEAD)"
if [[ "$BRANCH" != "main" ]]; then
  echo 'let us go';
  exit 1;
fi

echo 'exiting';
exit 0;