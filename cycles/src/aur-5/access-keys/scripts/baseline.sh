#!/usr/bin/env bash
# Mede o estado da migração. Rode antes e depois: npm run baseline
cd "$(dirname "$0")/.."
ANY=$(grep -rnE ":\s*any\b|as any|<any>" src/ | wc -l | tr -d ' ')
STRICT=$(npx tsc -p tsconfig.strict.json | grep -c "error TS")
echo "any explícitos:        $ANY"
echo "erros com strict:      $STRICT"
echo ""
echo "Erros por código:"
npx tsc -p tsconfig.strict.json | grep -oE "error TS[0-9]+" | sort | uniq -c | sort -rn
