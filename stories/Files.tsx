import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Files } from "@viva-ui/ui";

const menus = [
  {
    id: "1",
    name: "Dashboard",
    route: "/dashboard"
  },
  // User
  {
    id: "2",
    bpid: "1",
    name: "Users",
    route: "/user"
  },
  {
    id: "2-1",
    bpid: "2",
    name: "Details",
    route: "/user/:id"
  },
  {
    id: "2-1-1",
    bpid: "2-1",
    name: "Avatar Setting",
    route: "/user/:id/avatar"
  },
  // Theme
  {
    id: "3",
    bpid: "1",
    name: "Theme",
    route: "/theme"
  },
  {
    id: "3-1",
    bpid: "3",
    name: "Color",
    route: "/theme/color"
  },
  {
    id: "3-2",
    bpid: "3",
    name: "Background",
    route: "/theme/background"
  },
  // Another Setting ...
  {
    id: "4-1",
    bpid: "1",
    name: "Another Setting",
    route: "/another"
  }
];

// root 节点没有 bpid
function serialize(menus) {
  let tree = null;
  for (let menu of menus) {
    // 节点不存在
    if (menu === undefined) {
      throw new Error("节点不存在,请检查user role !");
    }
    // 同时存在x个根结点
    if (tree !== null && menu.bpid === undefined) {
      throw new Error("同时存在多个根结点 !");
    }
    // 初始化根结点
    if (menu.bpid === undefined) {
      tree = { ...menu, children: [] };
    }
    // 添加节点到节点树 逻辑上根结点不需要寻找父id
    else {
      const item = searchItemById(tree, menu.bpid);
      if (item !== undefined) {
        item.children.push({ ...menu, children: [] });
      }
    }
  }
  return tree;
}

function searchItemById(tree, id) {
  if (tree === undefined) return undefined;
  // 节点id一致返回
  if (tree.id === id) return tree;
  // 不一致继续查找
  for (let item of tree.children) {
    const result = searchItemById(item, id);
    if (result !== undefined) return result;
  }
}

const menuTree = serialize(menus);

storiesOf("Files", module).add("Basic", () => (
  <Files onChange={() => {}} menus={menuTree}></Files>
));
