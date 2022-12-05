if [[ "$VERCEL_GIT_COMMIT_REF" == "no_deploy" ]]; then
  echo 'GO';
  exit 1;
fi

echo 'EXIT';
exit 0;