if [[ "$VERCEL_GIT_COMMIT_REF" != "main" ]]; then
  echo 'exit';
  exit 0;
fi

echo 'GO';
exit 1;