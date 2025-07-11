import React, { useEffect, useState } from "react";
        import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from "react-native";
        import { GestureHandlerRootView } from "react-native-gesture-handler";
        import Icon from "react-native-vector-icons/MaterialIcons";

        const ProgrammationScreen = (): React.JSX.Element => {
          const [programme, setProgramme] = useState<any[]>([]);
          const [artists, setArtists] = useState<any[]>([]);
          const [stages, setStages] = useState<any[]>([]);
          const [loading, setLoading] = useState(true);
          const [favorites, setFavorites] = useState<number[]>([]);
          const [selectedStage, setSelectedStage] = useState<string>("");
          const [artistFilter, setArtistFilter] = useState<string>("");

          useEffect(() => {
            Promise.all([
              fetch("http://192.168.1.20:3000/programme").then((r) => r.json()),
              fetch("http://192.168.1.20:3000/artists").then((r) => r.json()),
              fetch("http://192.168.1.20:3000/stages").then((r) => r.json()),
            ])
              .then(([programmeData, artistsData, stagesData]) => {
                setProgramme(programmeData);
                setArtists(artistsData);
                setStages(stagesData);
              })
              .catch((error) => console.error(error))
              .finally(() => setLoading(false));
          }, []);

          const getArtistName = (id: any) => {
            const artist = artists.find((a) => String(a?.id) === String(id));
            return artist && typeof artist.name === "string" ? artist.name : "Artiste inconnu";
          };

          const getStageName = (id: any) => {
            const stage = stages.find((s) => String(s?.id) === String(id));
            return stage && typeof stage.name === "string" ? stage.name : "Scène inconnue";
          };

          const toggleFavorite = (id: number) => {
            setFavorites((prev) =>
              prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
            );
          };

          // Filtrage par scène et nom d'artiste
          const filteredProgramme = programme.filter((item) => {
            const artistName = getArtistName(item.artistId).toLowerCase();
            const matchStage = selectedStage ? String(item.stageId) === selectedStage : true;
            const matchArtist = artistName.includes(artistFilter.toLowerCase());
            return matchStage && matchArtist;
          });

          return (
            <GestureHandlerRootView style={styles.root}>
              <ScrollView contentContainerStyle={styles.scrollContent}>
                <Text style={styles.screenTitle}>Programmation</Text>
                <View style={styles.filterContainer}>
                  <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.stageScroll}>
                    <TouchableOpacity
                      style={[
                        styles.stageButton,
                        selectedStage === "" && styles.stageButtonSelected,
                      ]}
                      onPress={() => setSelectedStage("")}
                    >
                      <Text style={[
                        styles.stageButtonText,
                        selectedStage === "" && styles.stageButtonTextSelected,
                      ]}>Toutes les scènes</Text>
                    </TouchableOpacity>
                    {stages.map((stage) => (
                      <TouchableOpacity
                        key={stage.id}
                        style={[
                          styles.stageButton,
                          selectedStage === String(stage.id) && styles.stageButtonSelected,
                        ]}
                        onPress={() => setSelectedStage(String(stage.id))}
                      >
                        <Text style={[
                          styles.stageButtonText,
                          selectedStage === String(stage.id) && styles.stageButtonTextSelected,
                        ]}>{stage.name}</Text>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                  <TextInput
                    style={styles.input}
                    placeholder="Filtrer par nom d'artiste"
                    value={artistFilter}
                    onChangeText={setArtistFilter}
                  />
                </View>
                {loading ? (
                  <Text style={styles.loading}>Chargement...</Text>
                ) : (
                  filteredProgramme.map((item, index) => {
                    const artistName = getArtistName(item.artistId);
                    const stageName = getStageName(item.stageId);
                    const timeStart = item.time_start || "Heure début inconnue";
                    const timeEnd = item.time_end || "Heure fin inconnue";
                    const isFav = favorites.includes(item.id);

                    return (
                      <View key={index} style={styles.itemContainer}>
                        <View style={styles.itemContent}>
                          <View style={{ flex: 1 }}>
                            <Text style={styles.titre}>{artistName}</Text>
                            <Text style={styles.artiste}>{stageName}</Text>
                            <Text style={styles.heure}>
                              {timeStart} à {timeEnd}
                            </Text>
                          </View>
                          <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
                            <Icon
                              name={isFav ? "favorite" : "favorite-border"}
                              size={28}
                              color={isFav ? "#E53935" : "#B0BEC5"}
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                    );
                  })
                )}
              </ScrollView>
            </GestureHandlerRootView>
          );
        };

        export default ProgrammationScreen;

        const styles = StyleSheet.create({
          root: {
            flex: 1,
            backgroundColor: "#fff",
          },
          scrollContent: {
            padding: 20,
          },
          screenTitle: {
            fontSize: 22,
            fontWeight: "bold",
            marginBottom: 20,
            textAlign: "center",
            color: "#222",
          },
          loading: {
            textAlign: "center",
            marginTop: 30,
            fontSize: 16,
            color: "#888",
          },
          filterContainer: {
            marginBottom: 20,
          },
          stageScroll: {
            flexDirection: "row",
            marginBottom: 10,
          },
          stageButton: {
            paddingVertical: 8,
            paddingHorizontal: 16,
            backgroundColor: "#eee",
            borderRadius: 20,
            marginRight: 8,
          },
          stageButtonSelected: {
            backgroundColor: "#1a237e",
          },
          stageButtonText: {
            color: "#1a237e",
            fontWeight: "bold",
          },
          stageButtonTextSelected: {
            color: "#fff",
          },
          input: {
            height: 40,
            borderColor: "#ccc",
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            marginBottom: 10,
            backgroundColor: "#fff",
          },
          itemContainer: {
            marginBottom: 20,
            padding: 16,
            backgroundColor: "#f7f7fa",
            borderRadius: 10,
            shadowColor: "#000",
            shadowOpacity: 0.05,
            shadowRadius: 4,
            elevation: 2,
          },
          itemContent: {
            flexDirection: "row",
            alignItems: "center",
          },
          titre: {
            fontWeight: "bold",
            fontSize: 18,
            marginBottom: 6,
            color: "#1a237e",
          },
          artiste: {
            fontSize: 15,
            marginBottom: 4,
            color: "#388e3c",
          },
          heure: {
            fontSize: 13,
            fontStyle: "italic",
            color: "#616161",
          },
        });