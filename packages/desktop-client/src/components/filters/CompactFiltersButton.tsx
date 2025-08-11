import { SvgFilter } from '@actual-app/components/icons/v1';

import { Button } from '@desktop-client/components/ui/button';

export function CompactFiltersButton({ onPress }: { onPress: () => void }) {
  return (
    <Button variant="ghost" onClick={onPress} className="min-w-[20px]">
      <SvgFilter
        width={15}
        height={15}
        style={{ width: 15, height: 15, flexShrink: 0 }}
      />
    </Button>
  );
}
