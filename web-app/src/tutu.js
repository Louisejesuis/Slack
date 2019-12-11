const useMessageList = channelId => {
    const [isLoading, setIsLoading] = useState(true);
    const [messages, setMessages] = useState([]);
  
    useEffect(() => {
      const _fetchMessages = async () => {
        const response = await fetch(`/api/channels/${channelId}/messages`);
        const { messages } = await response.json();
        setMessages(messages);
        setIsLoading(false);
      };
      _fetchMessages();
    }, [channelId]);
  
    return [isLoading, messages];
  };