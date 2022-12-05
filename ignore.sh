if [[ "$VERCEL_GIT_COMMIT_REF" != "vercel_api" ]]; then
  echo 'exit';
  exit 0;
fi

echo 'GO';
exit 1;