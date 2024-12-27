import tagsStore from '@/store/tagsStore';
import { Tabs, TabsProps } from 'antd';
import React, { useEffect, useMemo, useState } from 'react';
import { useMatches } from 'react-router-dom';
import { useStore } from 'zustand';

const TabBar: React.FC = () => {
  const tabsStore = useStore(tagsStore);
  const matches = useMatches();
  const [activeKey, setActiveKey] = useState<string>();
  
  useEffect(() => {
    const currentRoute = matches[matches.length - 1]
    setActiveKey(currentRoute.pathname)
    tabsStore.addTag({
      key: currentRoute.pathname,
      label: currentRoute.handle.title
    })
  }, [matches])

  const items = useMemo(() => {
    return tabsStore.tags.map(tag => ({
      key: tag.key,
      label: tag.label
    }))
  }, [tabsStore.tags])

  return (
    <div className='h-8'>
      <Tabs
        type="editable-card"
        size='small'
        hideAdd
        tabBarStyle={{ height: '32px'}}
        activeKey={activeKey}
        items={items}
      />
    </div>
  );
}

export default TabBar;