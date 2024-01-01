import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  StatusBar
} from 'react-native';
import Title from './components/title/Title';
import UserStory from './components/UserStory/UserStory';
import UserPost from './components/UserPost/UserPost';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

import globalStyle from './assets/styles/globalStyle';
import {scaleFontSize} from './assets/styles/scaling';

function App() {
  const userStories = [
    {
      firstName: 'Joseph',
      id: 1,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Angel',
      id: 2,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'White',
      id: 3,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Olivier',
      id: 4,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Nata',
      id: 5,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Nicolas',
      id: 6,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Nino',
      id: 7,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Nana',
      id: 8,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Adam',
      id: 9,
      profileImage: require('./assets/images/default_profile.png'),
    },
  ];
  const userPosts = [
    {
      firstName: 'Allison',
      lastName: 'Becker',
      location: 'Boston,MA',
      likes: 1201,
      comments: 24,
      bookmarks: 55,
      id: 1,
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Jennifer',
      lastName: 'Wilkson',
      location: 'Worcester,MA',
      likes: 1301,
      comments: 24,
      bookmarks: 71,
      id: 2,
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Adam',
      lastName: 'Spera',
      location: 'Worcester,MA',
      likes: 100,
      comments: 8,
      bookmarks: 3,
      id: 3,
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Nata',
      lastName: 'Namoradze',
      location: 'Berlin,Germany',
      likes: 200,
      comments: 16,
      bookmarks: 6,
      id: 4,
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Nicolas',
      lastName: 'Vachesivili',
      location: 'New York, NY',
      likes: 200,
      comments: 16,
      bookmarks: 6,
      id: 5,
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
    },
  ];

  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  const userPostsPageSize = 2;
  const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);
  const [userPostsRenderedData, setUserPostsRenderedData] = useState([]);
  const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);

  const pagination = (database, currentPage, pageSize) => {
    console.log('currentPage', currentPage);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
      return [];
    }
    return database.slice(startIndex, endIndex);
  };

  // For stories
  useEffect(() => {
    setIsLoadingUserStories(true);
    const getInitialData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRenderedData(getInitialData);
    setIsLoadingUserStories(false);

    setIsLoadingUserPosts(true);
    const getInitialDataPosts = pagination(userPosts, 1, userPostsPageSize);
    setUserPostsRenderedData(getInitialDataPosts);
    setIsLoadingUserPosts(false);
  }, []);

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'red'} barStyle={'light-content'}/>
      <View>
        <FlatList
          ListHeaderComponent={
            <>
              <View style={globalStyle.header}>
                <Title title={'Let’s Explore'} />

                <TouchableOpacity style={globalStyle.messageIcon}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size={scaleFontSize(20)}
                    color={'#898DAE'}
                  />
                  <View style={globalStyle.messageNumberContainer}>
                    <Text style={globalStyle.messageNumber}>2</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={globalStyle.userStoryContainer}>
                <FlatList
                  onEndReachedThreshold={0.5}
                  onEndReached={() => {
                    if (isLoadingUserStories) return;
                    setIsLoadingUserStories(true);
                    const contentToAppend = pagination(
                      userStories,
                      userStoriesCurrentPage + 1,
                      userStoriesPageSize,
                    );
                    if (contentToAppend.length > 0) {
                      setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
                      setUserStoriesRenderedData(prev => [
                        ...prev,
                        ...contentToAppend,
                      ]);
                    }
                    setIsLoadingUserStories(false);
                  }}
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={userStoriesRenderedData}
                  renderItem={({item}) => (
                    <UserStory
                      key={'userStory' + item.id}
                      firstName={item.firstName}
                      profileImage={item.profileImage}
                    />
                  )}
                />
              </View>
            </>
          }
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (isLoadingUserPosts) return;
            setIsLoadingUserPosts(true);
            console.log('Fetching more data for you');
            const contentToAppend = pagination(
              userPosts,
              userPostsCurrentPage + 1,
              userPostsPageSize,
            );
            if (contentToAppend.length > 0) {
              setUserPostsCurrentPage(userPostsCurrentPage + 1);
              setUserPostsRenderedData(prev => [...prev, ...contentToAppend]);
            }
            setIsLoadingUserPosts(false);
          }}
          data={userPostsRenderedData}
          renderItem={({item}) => (
            <View style={globalStyle.userPostContainer}>
              <UserPost
                firstName={item.firstName}
                lastName={item.lastName}
                image={item.image}
                likes={item.likes}
                comments={item.comments}
                bookmarks={item.bookmarks}
                profileImage={item.profileImage}
                location={item.location}
              />
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;
