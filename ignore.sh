if [[ "$VERCEL_GIT_COMMIT_REF" eq "no_deploy" ]]; then
  echo 'exit';
  exit 0;
fi

echo 'GO';
exit 1;