import tabsStore from '@/store/tabsStore';
import { Tabs } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import { useMatches, useNavigate } from 'react-router-dom';
import { useStore } from 'zustand';

const TabBar = () => {
  const navigate = useNavigate()
  const matches = useMatches();
  const [activeKey, setActiveKey] = useState(matches[matches.length - 1].pathname);
  const tabs = useStore(tabsStore, state => state.tabs);
  const addTab = useStore(tabsStore, state => state.addTab)
  const removeTab = useStore(tabsStore, state => state.removeTab)

  useEffect(() => {
    const currentRoute = matches[matches.length - 1]
    setActiveKey(currentRoute.pathname)
    if(!tabs.some(t => t.key === currentRoute.pathname)) {
      addTab({
        key: currentRoute.pathname,
        label: currentRoute.handle.title
      })
    }
  }, [matches])

  const items = useMemo(() => {
    return tabs.map(tab => ({
      key: tab.key,
      label: tab.label
    }))
  }, [tabs])

  const clickTab = (key: string) => {
    navigate(key)
    setActiveKey(key)
  }

  const onEdit = (key: React.MouseEvent | React.KeyboardEvent | string, action: 'add' | 'remove',) => {
    if(action === 'add') return;
    removeTab(key as string)

    const updatedTabs = tabs.filter(tab => tab.key !== key);
    if (updatedTabs.length > 0) {
      const newActiveKey = updatedTabs[updatedTabs.length - 1].key;
      setActiveKey(newActiveKey);
      navigate(newActiveKey);
    } else {
      setActiveKey('');
      navigate('/');
    }
  }

  return (
    <div className='h-8'>
      <Tabs
        type={items.length === 1 ? 'card' : "editable-card"}
        size='small'
        hideAdd
        onEdit={onEdit}
        onTabClick={clickTab}
        tabBarStyle={{ height: '32px'}}
        activeKey={activeKey}
        items={items}
      />
    </div>
  );
}

export default TabBar;