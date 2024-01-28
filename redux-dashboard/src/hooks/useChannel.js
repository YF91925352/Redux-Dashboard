import { useEffect, useState } from "react";
import { getChannelAPI } from "@/apis/article";
//封装获取频道列表的逻辑
export const useChannel = () => {
  //获取频道数据
  const [channelList, setChannelList] = useState([]);
  useEffect(() => {
    const getChannelList = async () => {
      const res = await getChannelAPI();
      setChannelList(res.data.channels);
    };
    getChannelList();
  }, []);
  return { channelList };
};
