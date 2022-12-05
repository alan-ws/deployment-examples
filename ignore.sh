if [[ "$VERCEL_GIT_COMMIT_REF" == "no_deploy" ]]; then
  echo 'exit';
  exit 0;
fi

echo 'GO';
exit 1;