  
void setup() {
  Serial.begin(9600);
}

void loop() {
  int ldrvalor = analogRead(A0);
  Serial.println(ldrvalor);
  delay (500 );

}
